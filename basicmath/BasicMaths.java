public class BasicMaths {

    static void printDigit(int num){
        while(num != 0){
            int res = num % 10;
        System.out.println(res);
        num = num / 10;
        }
    }


    public static void main(String [] args){
        int num = 53127;
        printDigit(num);
    }
}