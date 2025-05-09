#include<stdio.h>
#include<conio.h>
#include<stdlib.h>
#include<string.h>
#include<math.h>
#include<unistd.h>
void mainprogram();
int checkwin();
void board();
int computer();
void tictactoe();
void coreprogram();
void sub(int,int);
void incre(int,int);
void print();
void mainp();
void printing();
int nr(int);
int esti(int);
int target = 0;
int etpsp,etap,etem,eteplab,etele,etaptt,etpsplab,psp,ap,em,eplab,ele,aptt,psplab;
int day,month,sem,sap,seplab,spsp,saptt,spsplab,sele,sppc,att[8];
float rem,rap,replab,rpsp,raptt,rpsplab,rele,rppc,pem,pap,peplab,ppsp,paptt,ppsplab,pele,pppc;
int num,i;
char s[10]={'1','2','3','4','5','6','7','8','9','\0'},name[30];
int main()
{
    int opinion;
    system("cls");
    printf("\t\t\t\t\t\tA STUDENT THING\n");
    printf("\t\t\t\t\t\t\t\t-An innovation from Rishik and Anji\n\n\n\n\n");
    printf("\n\n\n\t\t\t\t\t  Press:\n");
    printf("\t\t\t\t\t    1  to estimate internal marks\n");
    printf("\t\t\t\t\t    2  to know how to maintain attendence\n");
    printf("\t\t\t\t\t    3  to play a game\n");
    printf("\t\t\t\t\t    4  to exit\n\n\n");
    printf("\t\t\t\t\t    Your choice:");

    scanf("%d",&opinion);
    if(opinion==3)
    tictactoe();
    else if(opinion==2)
    coreprogram();
    else if(opinion==1)
    mainp();
    else if(opinion==4)
    {exit(0);getch();}
    else
    {printf("\n\n\n\n\t\t\t\t\t\t    invalid input");
    getch();
    main();}
    return 0;
}


void tictactoe()
{
    system("cls");
    printf("\n\t\tWelcome to Tic Tac Toe\n\n\n");
    printf("  Enter player name:");
    scanf("%s",name);
    system("cls");
    mainprogram();
}

void mainprogram()
{
    int player=1,choice,choi;
    char mark,str[10];
    strcpy(str,s);

    do
    {
    board();
    player=(player % 2)?1:2;
    mark=(player==1)? 'X' : 'O' ;
    if(player==1)
    {
    printf("\n\n  %s,",name);
    printf(" enter a number:");
    scanf("%d",&choice);}
    else
    choice=computer();

    num=choice;
    if ((s[0]=='1')&&(choice== 1))
    s[0]=mark;
    else if ((s[1]=='2')&&(choice== 2))
    s[1]=mark;
    else if ((s[2]=='3')&&(choice== 3))
    s[2]=mark;
    else if ((s[3]=='4')&&(choice== 4))
    s[3]=mark;
    else if ((s[4]=='5')&&(choice== 5))
    s[4]=mark;
    else if ((s[5]=='6')&&(choice== 6))
    s[5]=mark;
    else if ((s[6]=='7')&&(choice== 7))
    s[6]=mark;
    else if ((s[7]=='8')&&(choice== 8))
    s[7]=mark;
    else if ((s[8]=='9')&&(choice== 9))
    s[8]=mark;
    else
    {
        printf("  invalid input,retry again");
        player--;
        getch();
    }
    i=checkwin();
    player++;
    }while(i== -1);
    if(i==1)
    {
    board();
    --player;
    if(player==1)
    {
    printf("\n\n  %s won the match\n\n\n",name);
    strcpy(s,str);
    printf("  press:\n");
    printf("  1 to play again\n  2 to return to main menu\n  0 to exit\n\n  your choice:");
    scanf("%d",&choi);
    if(choi==1)
    mainprogram();
    else if(choi==0)
    exit(0);
    else if(choi==2)
    main();
    else
    {printf("\n\n  You did not shared your opinion properly");getch();}
    }
    else
    {
    printf("\n\n  Computer won the match\n\n\n");
    strcpy(s,str);
    printf("  press:\n");
    printf("  1 to play again\n  2 to return to main menu\n  0 to exit\n\n  your choice:");
    scanf("%d",&choi);
    if(choi==1)
    mainprogram();
    else if(choi==0)
    exit(0);
    else if(choi==2)
    main();
    else
    {printf("\n\n  You did not shared your opinion properly");
    getch();}
    }
    }
    else
    {
    board();
    printf("\n\n  Game is draw\n\n\n");
    strcpy(s,str);
    printf("  press:\n");
    printf("  1 to play again\n  2 to return to main menu\n  0 to exit\n\n  your choice:");
    scanf("%d",&choi);
    if(choi==1)
    mainprogram();
    else if(choi==0)
    exit(0);
    else if(choi==2)
    main();
    else
    {printf("\n\n  You did not shared your opinion properly");getch();}
   }
}

int checkwin()
{
    if(((s[0]==s[1])&&(s[0]==s[2]))||((s[3]==s[4])&&(s[3]==s[5]))||((s[6]==s[8])&&(s[6]==s[7])) )
    return 1;
    else if(((s[0]==s[3])&&(s[0]==s[6]))||((s[1]==s[4])&&(s[1]==s[7]))||((s[2]==s[5])&&(s[2]==s[8])))
    return 1;
    else if(((s[0]==s[4])&&(s[0]==s[8]))||((s[2]==s[4])&&(s[2]==s[6])))
    return 1;
    else if (s[0] == '1' || s[1] == '2' || s[2] == '3' || s[3] == '4' || s[4] == '5' || s[5] == '6' || s[6] == '7' || s[7] == '8' || s[8] == '9')
    return -1;
    else
    return 0;
}


void board()
{
    system("cls");
    
    printf("\t\tTic Tac Toe\n\n");
    printf("  %s - (X)\tComputer - (O)\n\n\n",name);
    printf("\t         |   |    \n");
    printf("\t       %c | %c | %c \n",s[0],s[1],s[2]);
    printf("\t     ____|___|____\n");
    printf("\t         |   |    \n");
    printf("\t       %c | %c | %c \n",s[3],s[4],s[5]);
    printf("\t     ____|___|____\n");
    printf("\t         |   |    \n");
    printf("\t       %c | %c | %c \n",s[6],s[7],s[8]);
    printf("\t         |   |    \n");
    printf("\n\n");
    if(num!=0 && i!=1)
    printf("  Computer choice:%d",num);
}

int computer()
{
   sleep(1);
   if((s[1]==s[2]||s[4]==s[8]||s[3]==s[6])&&(s[0]=='1'))
   return 1;
   else if((s[4]==s[7]||s[0]==s[2])&&(s[1]=='2'))
   return 2;
   else if((s[0]==s[1]||s[6]==s[4]||s[5]==s[8])&&(s[2]=='3'))
   return 3;
   else if((s[0]==s[6]||s[4]==s[5])&&(s[3]=='4'))
   return 4;
   else if((s[0]==s[8])&&(s[4]=='5'))
   return 5;
   else if((s[1]==s[7])&&(s[4]=='5'))
   return 5;
   else if((s[2]==s[6])&&(s[4]=='5'))
   return 5;
   else if((s[3]==s[5])&&(s[4]=='5'))
   return 5;
   else if((s[3]==s[4]||s[2]==s[8])&&(s[5]=='6'))
   return 6;
   else if((s[0]==s[3]||s[7]==s[8]||s[4]==s[2])&&(s[6]=='7'))
   return 7;
   else if((s[1]==s[4]||s[6]==s[8])&&(s[7]=='8'))
   return 8;
   else if((s[6]==s[7]||s[0]==s[4]||s[2]==s[5])&&(s[8]=='9'))
   return 9;
   else if(s[0]=='1')
   return 1;
   else if(s[4]=='5')
   return 5;
   else if(s[2]=='3')
   return 3;
   else if(s[6]=='7')
   return 7;
   else if (s[8]=='9')
   return 9;
   else if(s[7]=='8')
   return 8;
   else if(s[1]=='2')
   return 2;
   else if(s[5]=='6')
   return 6;
   else if(s[3]=='4')
   return 4;
}
void coreprogram()
{
    system("cls");
    sem=29,sap=29,seplab=8,spsp=20,saptt=24,spsplab=23,sele=16,sppc=3;
    printf("  Enter day number:");
    scanf("%d",&day);
    printf("  Enter month number:");
    scanf("%d",&month);
    sub(day,month);
}

void sub(int day,int month)
{
   if(month==4)
    incre(day,4);
   else
   {
    incre(30,4);
    incre(day,5);
   }
    printf("  Enter the attandence percentage of all subjects:\n");
    printf("  1.APTT:");
    scanf("%f",&paptt);
    printf("  2.AP:");
    scanf("%f",&pap);
    printf("  3.EM:");
    scanf("%f",&pem);
    printf("  4.EP LAB:");
    scanf("%f",&peplab);
    printf("  5.ELE:");
    scanf("%f",&pele);
    printf("  6.PSP:");
    scanf("%f",&ppsp);
    printf("  7.PSP LAB:");
    scanf("%f",&ppsplab);
    printf("  8.PPC:");
    scanf("%f",&pppc);

   rem=round((pem*sem)/100);
   rap=round((pap*sap)/100);
   replab=round((peplab*seplab)/100);
   rpsp=round((ppsp*spsp)/100);
   raptt=round((paptt*saptt)/100);
   rpsplab=round((ppsplab*spsplab)/100);
   rele=round((pele*sele)/100);
   rppc=round((pppc*sppc)/100);

   att[0]=(int)rem;
   att[1]=(int)rap;
   att[2]=(int)replab;
   att[3]=(int)rpsp;
   att[4]=(int)raptt;
   att[5]=(int)rpsplab;
   att[6]=(int)rele;
   att[7]=(int)rppc;

   rem=((75*sem)-(100*rem))/25;
   rap=((75*sap)-(100*rap))/25;
   replab=((75*seplab)-(100*replab))/25;
   rpsp=((75*spsp)-(100*rpsp))/25;
   raptt=((75*saptt)-(100*raptt))/25;
   rpsplab=((75*spsplab)-(100*rpsplab))/25;
   rele=((75*sele)-(100*rele))/25;
   rppc=((75*sppc)-(100*rppc))/25;
   print();
}

void incre(int day,int m)
{
    int d;
    if(m==4)
    d=16;
    else
    d=1;
    for(;d<day;d++)
    {
            if((((d==17)||(d==24))&&(m==4))||(((d==1)||(d==8)||(d==29))&&(m==5)))
            {
             sap++;sem+=2;spsp++;sele++,spsplab=spsplab+3;
            }
            else if((((d==18)||(d==25))&&(m==4))||(((d==2)||(d==9)||(d==30))&&(m==5)))
            {
             sem++;sap+=2;sele++;
            }
            else if((((d==19)||(d==26))&&(m==4))||(((d==3)||(d==10)||(d==31))&&(m==5)))
            {
             sem++;spsp++;seplab=seplab+2;sppc=sppc+3;
            }
            else if((((d==20)||(d==27))&&(m==4))||(((d==4)||(d==11))&&(m==5)))
            {
             sele++;sem++;sap++;saptt=saptt+3;
            }
            else if((((d==21)||(d==28))&&(m==4))||(((d==5)||(d==12))&&(m==5)))
            {
             spsp=spsp+3;sem++;sap++;
            }
            else if(((d==29)&&(m==4))||(((d==6)||(d==13))&&(m==5)))
            {
             sap++;saptt=saptt+3;sem++;
            }}
}
void print()
{   int choice;
    system("cls");
    printf("  No of periods should be attended in each subject to get 75%% of attendance:\n\n\n");
    printf("  Subjects\tAttandance percentage|Periods held|Periods attended|No of peroids required\n\n");
    printf("  1.APTT    : \t\t%.2f  \t\t%d\t\t%d\t\t",paptt,saptt,att[4]);
        if(paptt<75.00)
        printf("%d\n",(int)raptt);
        else
        printf("Attendance in this subject is greater than 75%%\n");
    printf("  2.AP      : \t\t%.2f  \t\t%d\t\t%d\t\t",pap,sap,att[1]);
        if(pap<75.00)
        printf("%d\n",(int)rap);
        else
        printf("Attendance in this subject is greater than 75%%\n");
    printf("  3.EM      : \t\t%.2f  \t\t%d\t\t%d\t\t",pem,sem,att[0]);
        if(pem<75.00)
        printf("%d\n",(int)rem);
        else
        printf("Attendance in this subject is greater than 75%%\n");
    printf("  4.EP LAB  : \t\t%.2f  \t\t%d\t\t%d\t\t",peplab,seplab,att[2]);
        if(peplab<75.00)
        printf("%d\n",(int)replab);
        else
        printf("Attendance in this subject is greater than 75%%\n");
    printf("  5.ELE     : \t\t%.2f  \t\t%d\t\t%d\t\t",pele,sele,att[6]);
        if(pele<75.00)
        printf("%d\n",(int)rele);
        else
        printf("Attendance in this subject is greater than 75%%\n");
    printf("  6.PSP     : \t\t%.2f  \t\t%d\t\t%d\t\t",ppsp,spsp,att[3]);
        if(ppsp<75.00)
        printf("%d\n",(int)rpsp);
        else
        printf("Attendance in this subject is greater than 75%%\n");
    printf("  7.PSP LAB : \t\t%.2f  \t\t%d\t\t%d\t\t",ppsplab,spsplab,att[5]);
        if(ppsplab<75)
        printf("%d\n",(int)rpsplab);
        else
        printf("Attendance in this subject is greater than 75%%\n");
    printf("  8.PPC     : \t\t%.2f  \t\t%d\t\t%d\t\t",pppc,sppc,att[7]);
        if(pppc<75.00)
        printf("%d\n",(int)rppc);
        else
        printf("Attendance in this subject is greater than 75%%\n");
    printf("\n\n\n  press:\n");
    printf("  1 to caluclate again\n  2 to return to main menu\n  0 to exit\n\n  your choice:");
    scanf("%d",&choice);
    if(choice==1)
    coreprogram();
    else if(choice==0)
    exit(0);
    else if(choice==2)
    main();
    else
    {printf("\n\n  You did not shared your opinion properly");getch();}
}

void mainp()
{
    system("cls");
    printf("  Enter your target for total internal marks in this sem :");
    scanf("%d",&target);
    system("cls");
    printf("  Target:%d\n\n",target);
    printf("  Enter the marks of mid 1 for all the subjects:\n\n");
    printf("  1.PSP:");
    scanf("%d",&psp);
    printf("  2.AP/EMMS:");
    scanf("%d",&ap);
    printf("  3.EM:");
    scanf("%d",&em);
    printf("  4.EP LAB:");
    scanf("%d",&eplab);
    printf("  5.ELE:");
    scanf("%d",&ele);
    printf("  6.APTT/ES:");
    scanf("%d",&aptt);
    printf("  7.PSP LAB:");
    scanf("%d",&psplab);
    
    etpsp=esti(psp);
    etap=esti(ap);
    etem=esti(em);
    eteplab=esti(eplab);
    etele=esti(ele);
    etaptt=esti(aptt);
    etpsplab=esti(psplab);
    printing();
}

int esti(int m)
{
    int c1,c2,result;
    float x,y,z,a,b,c;
    x = m*0.75;
    y = target-x;
    z = y/0.25;
    c1 = round(z);

    a = m*0.25;
    b = target-a;
    c = b/0.75;
    c2= round(c);

    if((c1<=40)||(c2<=40))
    {
        result=(c1<c2)?c1:c2;
        return result;
    }
    else
    return 0;
}

void printing()
{
    int choice;
    system("cls");
    printf("\n  Target:%d",target);
    printf("\n\n  Subjects\tFirst Mid marks | Estimated marks\n\n");
    printf("  1.PSP     :\t\t%d",psp);
        if(etpsp!=0)
        printf("\t\t%d\n",etpsp);
        else
        printf("\tTarget not reachable-Max(%d) if mid-2 is 40 \n",nr(psp));             
    printf("  2.AP/EMMS : \t\t%d",ap);
        if(etap!=0)
        printf("\t\t%d\n",etap);
        else
        printf("\tTarget not reachable-Max(%d) if mid-2 is 40 \n",nr(ap));
    printf("  3.EM      :\t\t%d",em);
         if(etem!=0)
        printf("\t\t%d\n",etem);
        else
        printf("\tTarget not reachable-Max(%d) if mid-2 is 40 \n",nr(em));
    printf("  4.EP LAB  :\t\t%d",eplab);
         if(eteplab!=0)
        printf("\t\t%d\n",eteplab);
        else
        printf("\tTarget not reachable-Max(%d) if mid-2 is 40 \n",nr(eplab));
    printf("  5.ELE     :\t\t%d",ele);
         if(etele!=0)
        printf("\t\t%d\n",etele);
        else
        printf("\tTarget not reachable-Max(%d) if mid-2 is 40 \n",nr(ele));
    printf("  6.APTT/ES : \t\t%d",aptt);
         if(etaptt!=0)
        printf("\t\t%d\n",etaptt);
        else
        printf("\tTarget not reachable-Max(%d) if mid-2 is 40 \n",nr(aptt));
    printf("  7.PSP LAB :\t\t%d",psplab);
         if(etpsplab!=0)
        printf("\t\t%d\n",etpsplab);
        else
        printf("\tTarget not reachable-Max(%d) if mid-2 is 40 \n",nr(psplab));
    printf("\n\n\n  press:\n");
    printf("  1 to caluclate again\n  2 to return to main menu\n  0 to exit\n\n  your choice:");
    scanf("%d",&choice);
    if(choice==1)
    mainp();
    else if(choice==0)
    exit(0);
    else if(choice==2)
    main();
    else
    {printf("\n\n  You did not shared your opinion properly");getch();}
}

int nr(int m)
{
    int y;
    float x;
    x=(m*0.25)+30;
    y=round(x);
    return y;
}
