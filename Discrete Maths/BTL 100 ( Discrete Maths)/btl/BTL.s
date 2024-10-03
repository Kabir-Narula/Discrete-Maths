# data segment
.data
.align 2
str:
    .asciiz "Kabir Narula: 127962223: w = 3, l = 6, perimeter = "

# variables
.width: .word 3
.length: .word 6

# text segment
.text
.align 2
.globl main
.ent main

main:
    # load width w
    lw $t0, .width

    # load length l
    lw $t1, .length

    # calculate perimeter 2w + 2l
    add $t2, $t0, $t0   # 2w
    add $t3, $t1, $t1   # 2l
    add $t4, $t2, $t3   # 2w + 2l

    # print output
    li $v0, 4
    la $a0, str
    syscall

    li $v0, 1
    move $a0, $t4       # load perimeter into argument register
    syscall

    # exit program
   
