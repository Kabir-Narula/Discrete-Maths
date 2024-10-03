#include "stopwatch.h"
#include <cstdio>
#include <cstdlib>
#include <iostream>
#include <fstream>

const int N = 10000000;
const int NUM_PROBABILITIES = 101;
const int NUM_RUNS = 5;

int main(int argc, char* argv[]) {
    std::ofstream outfile("myoutput.csv");

    int* a = new int[N];
    int probabilities[NUM_PROBABILITIES];
    double averageTimes[NUM_PROBABILITIES] = { 0 };

    // Generate probabilities from 0 to 100
    for (int i = 0; i < NUM_PROBABILITIES; i++) {
        probabilities[i] = i;
    }

    for (int p = 0; p < NUM_PROBABILITIES; p++) {
        for (int run = 0; run < NUM_RUNS; run++) {
            int P = probabilities[p];

            for (int i = 0; i < N; i++) {
                a[i] = rand() % 100;
            }

            volatile int s = 0;

            StopWatch watch;
            watch.reset();
            watch.start();       // Start the stopwatch
            for (int i = 0; i < N; i++) {
                if (a[i] < P) {
                    s += a[i];
                }
            }
            watch.stop();       // Stop the stopwatch
            double elapsedTime = watch.currtime();
            averageTimes[p] += elapsedTime;

            std::cout << elapsedTime << std::endl;
            outfile << elapsedTime << ",";
        }
        outfile << std::endl;
    }

    // Calculate average time for each probability
    for (int p = 0; p < NUM_PROBABILITIES; p++) {
        averageTimes[p] /= NUM_RUNS;
    }

    // Output average times to console and file
    for (int p = 0; p < NUM_PROBABILITIES; p++) {
        std::cout << probabilities[p] << "%: " << averageTimes[p] << std::endl;
        outfile << probabilities[p] << "," << averageTimes[p] << std::endl;
    }

    outfile.close();
    delete[] a;
    return 0;
}
