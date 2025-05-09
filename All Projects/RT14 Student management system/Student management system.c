#include<stdio.h>
#include<stdlib.h>
#include<string.h>
void add();
void search();
void update();
void display();
void delp();
void delt();
void average();


struct node{
    int id,age;
    float gpa;
    char name[30],pro[30];
    struct node*next;
};
struct node*start=NULL;

void add()
{
    int size,i;
    printf("\t\t\t\t\tenter the number of students you want to add:");
    scanf("%d",&size);
    getchar();
    if(size<1)
    printf("\t\t\t\t\tincorrect input, please give the valid input");
    else
  {   if(start==NULL)
      {
        struct node*temp=(struct node*)malloc(sizeof(struct node));
        printf("\n\t\t\t\t\tenter the following details:\n");
        printf("\t\t\t\t\tStudent ID:");
        scanf("%d",&temp->id);
        getchar();
        printf("\t\t\t\t\tFull Name:");
        fgets(temp->name,30, stdin);
        printf("\t\t\t\t\tProgram:");
        fgets(temp->pro,30, stdin);
        printf("\t\t\t\t\tAge:");
        scanf("%d",&temp->age);
        printf("\t\t\t\t\tGPA:");
        scanf("%f",&temp->gpa);
        temp->next=NULL;
        start=temp;
        for(i=2;i<=size;i++)
        {
            struct node*new=(struct node*)malloc(sizeof(struct node));
            printf("\n\t\t\t\t\tenter the following details of %d student:\n",i);
            printf("\t\t\t\t\tStudent ID:");
            scanf("%d",&new->id);getchar();
            printf("\t\t\t\t\tFull Name:");
            fgets(new->name,30, stdin);
            printf("\t\t\t\t\tProgram:");
            fgets(new->pro,30, stdin);
            printf("\t\t\t\t\tAge:");
            scanf("%d",&new->age);
            printf("\t\t\t\t\tGPA:");
            scanf("%f",&new->gpa);
            new->next=NULL;
            temp->next=new;
            temp=new;
        }  
      }
      else
      { struct node*temp=start;
        while(temp->next!=NULL)
        temp=temp->next;
        for(i=1;i<=size;i++)
        {
            struct node*new=(struct node*)malloc(sizeof(struct node));
            printf("\n\t\t\t\t\tenter the following details of %d student:\n",i);
            printf("\t\t\t\t\tStudent ID:");
            scanf("%d",&new->id);getchar();
            printf("\t\t\t\t\tFull Name:");
            fgets(new->name,30, stdin);
            printf("\t\t\t\t\tProgram:");
            fgets(new->pro,30, stdin);
            printf("\t\t\t\t\tAge:");
            scanf("%d",&new->age);
            printf("\t\t\t\t\tGPA:");
            scanf("%f",&new->gpa);
            new->next=NULL;
            temp->next=new;
            temp=new;
        }  
      }
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
        printf("\n\t\t\t\t\tStudent ID:");
        printf("%d",temp->id);
        printf("\n\t\t\t\t\tFull Name:");
        printf("%s",temp->name);
        printf("\t\t\t\t\tProgram:");
        printf("%s",temp->pro);
        printf("\t\t\t\t\tAge:");
        printf("%d",temp->age);
        printf("\n\t\t\t\t\tGPA:");
        printf("%.2f\n\n",temp->gpa);
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
    printf("\t\t\t\t\tenter the Student Id:");
    scanf("%d",&i);
    struct node*temp=start;
    while(temp!=NULL)
    {
        
        if(i==temp->id)
        break;
        temp=temp->next;
    }
    if(temp==NULL)
    printf("\t\t\t\t\tThe student with Id %d not found",i);
    else
    {   printf("\n\t\t\t\t\tthe student details are:");
        printf("\n\t\t\t\t\tStudent ID:");
        printf("%d",temp->id);
        printf("\n\t\t\t\t\tFull Name:");
        printf("%s",temp->name);
        printf("\t\t\t\t\tProgram:");
        printf("%s",temp->pro);
        printf("\t\t\t\t\tAge:");
        printf("%d",temp->age);
        printf("\n\t\t\t\t\tGPA:");
        printf("%.2f\n\n",temp->gpa);
    }
  }

}

void update()
{if(start==NULL)
  printf("\t\t\t\t\tlist is empty");
  else
  { int i;
    printf("\t\t\t\t\tenter the Student Id:");
    scanf("%d",&i);
    struct node*temp=start;
    while(temp!=NULL)
    {
        
        if(i==temp->id)
        break;
        temp=temp->next;
    }
    if(temp==NULL)
    printf("\t\t\t\t\tThe student with Id %d not found",i);
    else
    {  
        printf("\n\t\t\t\t\tenter the following new details:\n");
        printf("\t\t\t\t\tStudent ID:");
        scanf("%d",&temp->id);
        getchar();
        printf("\t\t\t\t\tFull Name:");
        fgets(temp->name,30, stdin);
        printf("\t\t\t\t\tProgram:");
        fgets(temp->pro,30, stdin);
        printf("\t\t\t\t\tAge:");
        scanf("%d",&temp->age);
        printf("\t\t\t\t\tGPA:");
        scanf("%f",&temp->gpa);
        printf("\t\t\t\t\tstudent details with ID:%d updated successfully",i);
    }
  }

}

void delp()
{
    if(start==NULL)
  printf("\t\t\t\t\tlist is empty");
  else
  { int i;
    printf("\t\t\t\t\tenter the Student Id:");
    scanf("%d",&i);
    struct node*prev=start;
    struct node*temp=start;
    while(temp!=NULL && i!=temp->id)
    {
      prev=temp;
      temp=temp->next;
    }
    if(temp==NULL)
    printf("\t\t\t\t\tThe student with Id %d not found",i);
    else 
    {prev->next=temp->next;
    printf("\t\t\t\t\tstudent information with ID:%d deleted successfully",i);}
  }

}

void delt()
{
  start=NULL;
  printf("\t\t\t\t\tRecord formatted successfully");
}

void average()
{
     if(start==NULL)
  printf("\t\t\t\t\tThe record is empty");
  else
  { int count=1;
    float average,sum=0;
    struct node*temp=start;
    while(temp!=NULL)
    {
        sum+=temp->gpa;
        count++;
        temp=temp->next;
    }
    average=sum/count;
    printf("\t\t\t\t\tThe average GPA is:%.2f",average);
  }


}


int main()
{   int ch;
    printf("\t\t\t\t\tWELCOME TO STUDENT INFORMATION PORTAL");
    while(1)
    { 
      printf("\n\t\t\t\t\t---------------------------------\n\n\t\t\t\t\tenter:\n\t\t\t\t\t1 to add student information\n\t\t\t\t\t2 to search a student information\n\t\t\t\t\t3 to update a student information\n");
      printf("\t\t\t\t\t4 to know the average GPA of all students\n\t\t\t\t\t5 to display the entire record\n\t\t\t\t\t6 to delete a student information\n\t\t\t\t\t7 to clear entire record\n\t\t\t\t\t8 to exit\n\n\t\t\t\t\tyour choice:");
      scanf("%d",&ch);
      switch(ch)
      {
        case 1:system("cls");add();break;
        case 2:system("cls");search();break;
        case 3:system("cls");update();break;
        case 4:system("cls");average();break;
        case 5:system("cls");display();break;
        case 6:system("cls");delp();break;
        case 7:system("cls");delt();break;
        case 8:exit(0);break;
        default:system("cls");printf("\n\t\t\t\t\tInvalid input is given, please try again");


      }

    }

    return 0;
}
