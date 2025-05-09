#include<stdio.h>
#include<stdlib.h>
#include<string.h>
void add();
void search();
void display();
void delp();
void delt();
void tc();

int on=0;
struct node{
    int sno,cost,quan;
    char name[30];
    struct node*next;
};
struct node*start=NULL;

void add()
{
   if(start==NULL)
      {
        struct node*temp=(struct node*)malloc(sizeof(struct node));
        printf("\n\t\t\t\t\tenter the following details:\n");
        getchar();
        printf("\t\t\t\t\tEnter Dish Name:");
        fgets(temp->name,30, stdin);
        printf("\t\t\t\t\tEnter Quantity:");
        scanf("%d",&temp->quan);
        printf("\t\t\t\t\tEnter Total Cost:");
        scanf("%d",&temp->cost);
        on+=1;
        temp->sno=on;
        temp->next=NULL;
        start=temp;
        printf("\t\t\t\t\tOrder with number %d added successfully.",temp->sno);
      }
      else
      {     struct node*temp=start;
            while(temp->next!=NULL)
            temp=temp->next;
            struct node*new=(struct node*)malloc(sizeof(struct node));
            printf("\n\t\t\t\t\tenter the following details:\n");
            getchar();
            printf("\t\t\t\t\tEnter Dish Name:");
            fgets(new->name,30, stdin);
            printf("\t\t\t\t\tEnter Quantity:");
            scanf("%d",&new->quan);
            printf("\t\t\t\t\tEnter Total Cost:");
            scanf("%d",&new->cost);
            on+=1;
            new->sno=on;
            new->next=NULL;
            temp->next=new;
            temp=new;
            printf("\t\t\t\t\tOrder with number %d added successfully.",temp->sno);
      }
  
}

void display()
{ if(start==NULL)
  printf("\t\t\t\t\tThe record is empty");
  else
  { printf("\n\t\t\t\t\t---------------------------------\n");
    printf("\t\t\t\t\t---------------------------------\n");
    struct node*temp=start;
    while(temp!=NULL)
    {   
        printf("\n\t\t\t\t\tOrder Number:%d\n",temp->sno);
        printf("\t\t\t\t\tDish Name:");
        printf("%s",temp->name);
        printf("\t\t\t\t\tQuantity:");
        printf("%d\n",temp->quan);
        printf("\t\t\t\t\tTotal Cost:");
        printf("%d\n",temp->cost);
        temp=temp->next;
    }
    printf("\t\t\t\t\t---------------------------------");
  }

}

void search()
{ if(start==NULL)
  printf("\t\t\t\t\tlist is empty");
  else
  { int i;
    printf("\t\t\t\t\tEnter The Order Number:");
    scanf("%d",&i);
    struct node*temp=start;
    while(temp!=NULL)
    {
        
        if(i==temp->sno)
        break;
        temp=temp->next;
    }
    if(temp==NULL)
    printf("\t\t\t\t\tThe order with Id %d not found",i);
    else
    {   printf("\n\t\t\t\t\tthe order details are:");
        printf("\n\t\t\t\t\tS.No:");
        printf("%d\n",temp->sno);
        printf("\t\t\t\t\tDish Name:");
        printf("%s\n",temp->name);
        printf("\t\t\t\t\tQuantity:");
        printf("%d\n",temp->quan);
        printf("\t\t\t\t\tTotal Cost:");
        printf("%d\n",temp->cost);
    }
  }

}


void delp()
{
    if(start==NULL)
  printf("\t\t\t\t\tlist is empty");
  else
  { int i;
    printf("\t\t\t\t\tEnter The Order Number:");
    scanf("%d",&i);
    struct node*prev=start;
    struct node*temp=start;
    while(temp!=NULL && i!=temp->sno)
    {
      prev=temp;
      temp=temp->next;
    }
    if(temp==NULL)
    printf("\t\t\t\t\tThe Order number %d not found",i);
    else 
    {prev->next=temp->next;
    printf("\t\t\t\t\tOrder with number %d removed successfully.",temp->sno);}
  }

}

void delt()
{
  start=NULL;
  on=0;
  printf("\t\t\t\t\tRecord formatted successfully");
}

void tc()
{
  if(start==NULL)
  printf("\t\t\t\t\tThe Record Is Empty");
  else
  { 
    float total;
    struct node*temp=start;
    while(temp!=NULL)
    {
        total+=temp->cost;
        temp=temp->next;
    }
    printf("\t\t\t\t\tThe Total Sales is:%.2f",total);
  }
}



int main()
{   int ch;
    printf("\t\t\t\t\tFOOD ORDERING SYSTEM");
    while(1)
    { 
      printf("\n\t\t\t\t\t---------------------------------\n\n\t\t\t\t\tenter:\n\t\t\t\t\t1 To Place Order\n\t\t\t\t\t2 To Remove Order\n\t\t\t\t\t3 To Display Order Information\n");
      printf("\t\t\t\t\t4 To Display All Orders\n\t\t\t\t\t5 To Calculate Total Sales\n\t\t\t\t\t6 To Clear all data\n\t\t\t\t\t7 To Exit\n\n\t\t\t\t\tEnter your choice:");
      scanf("%d",&ch);
      switch(ch)
      {
        case 1:system("cls");add();break;
        case 2:system("cls");delp();break;
        case 3:system("cls");search();break;
        case 4:system("cls");display();break;
        case 5:system("cls");tc();break; 
        case 6:system("cls");delt();break;
        case 7:exit(0);break;
        default:system("cls");printf("\n\t\t\t\t\tInvalid input is given, please try again");
      }

    }

    return 0;
}
