function runPromiseDemo() {

    clearOutput();

    print("========== Promise Demonstration ==========\n");

    print("Promise Created");
    print("Current State : Pending\n");

    const success = true;

    const myPromise = new Promise((resolve, reject) => {

        setTimeout(() => {

            if (success) {
                resolve("Data Loaded Successfully");
            } else {
                reject("Something Went Wrong");
            }

        }, 2000);

    });

    myPromise
        .then((result) => {
            print("✔ Promise Resolved");
            print(result);
        })
        .catch((error) => {
            print("✖ Promise Rejected");
            print(error);
        })
        .finally(() => {
            print("\nPromise Execution Finished");
        });

}