.align 0
str:
   .asciiz "Kabir Narula: 127962223: w = 3, l = 6, perimeter = "

.text
.align 2
.globl main
.ent main

main:
   li $t0, 3   # w = 3
   li $t1, 6   # l = 6
   add $t2, $t0, $t0  # t2 = 2w
   add $t3, $t1, $t1  # t3 = 2l
   add $a0, $t2, $t3  # a0 = 2w + 2l = perimeter
   li $v0, 1   # print integer value
   syscall

   li $v0, 10  # exit program
   syscall 

.end main
++