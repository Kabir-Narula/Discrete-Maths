#include "stopwatch.h"

StopWatch::StopWatch() {
    elapsedTime_ = 0;
    isstop_ = true;

#if PLATFORM == WINDOWS
    starttime_ = 0;
    stoptime_ = 0;
#else
    clock_gettime(CLOCK_MONOTONIC_RAW, &starttime_);
    stoptime_ = starttime_;
#endif


}
void StopWatch::reset() {
#if PLATFORM == WINDOWS
    starttime_ = 0;
    stoptime_ = 0;
#else
    clock_gettime(CLOCK_MONOTONIC_RAW, &starttime_);
    stoptime_ = starttime_;
#endif
    elapsedTime_ = 0;
    isstop_ = true;
}
void StopWatch::start() {
#if PLATFORM == WINDOWS
    clock_t curr = clock();
    if (isstop_) {
        starttime_ = curr;
        isstop_ = false;
    }
    else {
        starttime_ = curr;   //its like hitting reset and start
        stoptime_ = starttime_;
        elapsedTime_ = 0;
    }
#else
    struct timespec curr;
    clock_gettime(CLOCK_MONOTONIC_RAW, &curr);
    if (isstop_) {
        starttime_ = curr;
        isstop_ = false;
    }
    else {
        clock_gettime(CLOCK_MONOTONIC_RAW, &starttime_);
        stoptime_ = starttime_;
        elapsedTime_ = 0;
    }
#endif

}
void StopWatch::stop() {
#if PLATFORM == WINDOWS
    stoptime_ = clock();
    elapsedTime_ += stoptime_ - starttime_;
#else
    clock_gettime(CLOCK_MONOTONIC_RAW, &stoptime_);
    elapsedTime_ += (stoptime_.tv_nsec - starttime_.tv_nsec) / 1000000000.0 +
        (stoptime_.tv_sec - starttime_.tv_sec);
#endif
    isstop_ = true;
}
double StopWatch::currtime() {
    double rc;
#if PLATFORM == WINDOWS
    clock_t curr = clock();
    clock_t elapse = (isstop_) ? elapsedTime_ : (elapsedTime_ + curr - starttime_);
    rc = double(elapse) / CLOCKS_PER_SEC;
#else
    struct timespec curr;
    clock_gettime(CLOCK_MONOTONIC_RAW, &curr);
    if (isstop_) {
        rc = elapsedTime_;
    }
    else {
        rc = elapsedTime_ + (curr.tv_nsec - starttime_.tv_nsec) / 1000000000.0 +
            (curr.tv_sec - starttime_.tv_sec);
    }
#endif
    return rc;
}

bool StopWatch::isPaused() {
    return isstop_;
}
