#include <stdio.h>
#include <complex.h>
#include <math.h>
#include <complex.h>

int main()
{
    double find_roots;
    double complex z;
    double a, b, c, determinant, root1, root2, re, im;
    int count = 0;

    while (1)
    {
        printf("\nEnter a b c values: ");
        scanf("%lf %lf %lf", &a, &b, &c);
        if (a == 0)
        {
            if (b == 0)
            {
                if (c == 0)
                    break;
            }
        }
        determinant = (b * b) - (4 * a * c);

        if (determinant > 0)
        {
            count = count + 1;
            printf("roots are real... \n");
            root1 = (-b + sqrt(determinant)) / (2 * a);
            root2 = (-b - sqrt(determinant)) / (2 * a);
            printf("root1 = %lf \n", root1);
            printf("root2 = %lf \n", root2);
        }
        if (determinant == 0)
        {
            count = count + 1;
            printf("one real root... \n");
            root1 = (-b + sqrt(determinant)) / (2 * a);
            printf("root1 = %lf \n", root1);
        }
        if (determinant < 0)
        {

            count = count + 1;

            printf("roots are imaginary \n");
            z = -b / (2 * a) + (sqrt(-determinant) / (2 * a)) * I;

            if (creal(z) == 0)
            {

                printf("root1 = i* %lf \n", cimag(z));
                printf("root2 = -i* %lf \n", cimag(z));
            }
            else
            {
                printf("root1 = %lf + i*%lf \n", creal(z), cimag(z));
                printf("root2 = %lf - i*%lf \n", creal(z), cimag(z));
            }
        }
    }
    printf("\n");

    printf("%d equations were solved", count);
    return 0;
}
