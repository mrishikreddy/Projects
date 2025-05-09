#include<stdio.h>
#include<math.h>
void coreprogram();
void sub(int,int);
void incre(int,int);
void print();
int day,month,sem=29,sap=29,seplab=8,spsp=20,saptt=24,spsplab=23,sele=16,sppc=3;
float rem,rap,replab,rpsp,raptt,rpsplab,rele,rppc,pem,pap,peplab,ppsp,paptt,ppsplab,pele,pppc;
int main()
{
    coreprogram();
    
}

void coreprogram()
{
    system("cls");
    printf("enter day number:");
    scanf("%d",&day);
    printf("enter month number:");
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
    printf("enter the attendance percentage of all subjects:\n");
    printf("1.EM:");
    scanf("%f",&pem);
    printf("2.AP:");
    scanf("%f",&pap);
    printf("3.EP LAB:");
    scanf("%f",&peplab);
    printf("4.PSP:");
    scanf("%f",&ppsp);
    printf("5.APTT:");
    scanf("%f",&paptt);
    printf("6.PSP LAB:");
    scanf("%f",&ppsplab);
    printf("7.ELE:");
    scanf("%f",&pele);
    printf("8.PPC:");
    scanf("%f",&pppc);

   rem=(pem*sem)/100;
   rap=(pap*sap)/100;
   replab=(peplab*seplab)/100;
   rpsp=(ppsp*spsp)/100;
   raptt=(paptt*saptt)/100;
   rpsplab=(ppsplab*spsplab)/100;
   rele=(pele*sele)/100;
   rppc=(pppc*sppc)/100;

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
{   
    printf("\n\n\n1.aptt=%f\n",raptt);
    printf("2.ap=%f\n",rap);
    printf("3.em=%f\n",rem);
    printf("4.eplab=%f\n",replab);
    printf("5.ele=%f\n",rele);
    printf("6.psp=%f\n",rpsp);
    printf("7.psplab=%f\n",rpsplab);
    printf("8.ppc=%f\n",rppc);
}
