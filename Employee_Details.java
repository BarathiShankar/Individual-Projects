//Program to impliment a banker class and inherit it to programmer and HR and provide the salary based on the DA,PF and many other
import java.util.Scanner;
class employee
{

 protected String name;
 protected double ID;
 protected double tot_sal;
 protected double DA;
 protected double basic;
 Scanner s=new Scanner(System.in);
 employee()
 {
     System.out.print("Enter the name : ");
     name=s.nextLine();
     System.out.print("Enter the ID : ");
     ID=s.nextInt();
     System.out.print("Enter the Basic pay : ");
     basic=s.nextDouble();
     System.out.print("Enter the DA : ");
     DA=s.nextDouble();
 }
 protected void print()
 {
     System.out.println("Name : "+name+"\nID : "+ID+"\nTotal Salary : "+tot_sal);
     System.out.println("Basic salary : "+basic+"\nDA : "+DA);
 }
}
class programmer extends employee
{
    private int prog;
    private double bonus;
    programmer()
    {
        super();
        System.out.print("Enter the number of programing languages known : ");
        prog=s.nextInt();
        bonus=prog*3000;
        tot_sal=bonus+basic+DA;
    }
    public void print()
    {
        System.out.println("\nDesignation : Programmer - ");
        super.print();
        System.out.println("Bonus recieved : "+bonus+"\nNumber of languages known : "+prog);
    }
}
class HR extends employee
{
    private double pf;
    private double bonus;
    private int completed_tasks;
    HR()
    {
        super();
        System.out.print("Enter the number of tasks completed : ");
        completed_tasks=s.nextInt();
        System.out.print("Enter the PF : ");
        pf=s.nextDouble();
        bonus=(completed_tasks/100);
        tot_sal=bonus+pf+DA+basic;
    }
    public void print()
    {
        System.out.println("Designation : HR - ");
        super.print();
        System.out.println("PF : "+pf+"\nBonus recieved : "+bonus+"\nNumber of tasks completed : "+completed_tasks);
    }
    }
public class Employee_Details
{
    static
    {
        System.out.println("\n\n-> Enter the details of n number of employees ( Designated as programmers and HRs )"+
                "\n-> Used the features of overloading and overriding "+
                "\n-> Utilized inheritence and super keywords\n\n");
    }
    public static void main(String[] args)
    {
        int n,i,m;
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter the Number of employees as programmers : ");
        n=sc.nextInt();
        programmer[] p=new programmer[n];
        for(i=0;i<n;i++)
        {
            System.out.println("\nEnter the details of programmer "+(i+1));
            p[i] = new programmer();
        }
        System.out.print("Enter the Number of employees as HR Managers : ");
        m=sc.nextInt();
        HR[] h=new HR[m];
        for(i=0;i<m;i++)
        {
            System.out.println("\nEnter the details of Manager "+(i+1));
            h[i] = new HR();
        }
        for(i=0;i<n;i++)
        {
            System.out.println("Programmer "+(i+1)+" - ");
            p[i].print();
        }
        for(i=0;i<m;i++)
        {
            System.out.println("HR Manager "+(i+1)+" - ");
            h[i].print();
        }
    }
}
//COMPLETED
