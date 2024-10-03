#ifndef TIMER_H
#define TIMER_H
#include <time.h>
#define POSIX 1
#define WINDOWS 2
//Generally you want to use the POSIX version.  Its better, more accurate.  But, the
//function won't work on non-posix systems... so switch to WINDOWS if you are using VS
//The matrix version is POSIX
#define PLATFORM WINDOWS  


class StopWatch {
#if PLATFORM == WINDOWS
    clock_t starttime_;
    clock_t stoptime_;
#else
    struct timespec starttime_;
    struct timespec stoptime_;
#endif
    double elapsedTime_;
    bool isstop_;
public:

    StopWatch();
    void reset();
    void start();
    void stop();
    bool isPaused();
    double currtime();
};
#endif