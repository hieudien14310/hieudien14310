compileAllFileCpp(){
    g++ *.cpp -o main.output
}
runMainFile(){
    ./main.output
}
PWD=$(pwd)
cd $PWD/WithC
compileAllFileCpp
runMainFile