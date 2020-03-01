#include <iostream>

using namespace std;

int C(int n,int k){
    if(k == 0){
        return 1;
    }
    if(n == k){
        return 1;
    }
    else{
        return C(n - 1, k - 1) + C(n - 1, k);
    }
}

int main()
{
    cout << C(6,3) << endl;
    return 0;
}

