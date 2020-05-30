## Go的web框架了解

[csdn Go web 框架对比](https://blog.csdn.net/dev_csdn/article/details/78740990)


## 环境安装


## 使用goland 编译第一个Go程序

package main

import "fmt"

func main()  {
	fmt.Printf("hello world")
}】


##  Go 语言结构

	- 包声明
	- 引入包
	- 函数
	- 变量
	- 语句 & 表达式
	- 注释

注意： Go 语法中 { 不能单独一行

##　Go的基础语法

	- Go 标记 关键字 标识符 常量 字符串 符号 等 
	- 行分隔符号 一行代表一个语句结束
	- 注释
	- 标识符
	- 字符串连接  可以通过 + 实现
	- 关键字

## Go 数据类型

	- 布尔  false true
	- 数字类型 int  float32  float64 
	- 字符串类型
	- 派生类型 指针  数组 struct  channel 函数类型 切片类型
		接口类型  Map类型

## 数字类型 

## Go 语言变量

	- 由字母、数字、下划线， 首字母不能为数字
	- 声明变量 一般使用var 

## import 的特殊语法

	- 点 . 操作
	- 别名操作
	- 下划线 _ 操作 导入该包，不导入整个包而是执行包中的init函数，注意init不需要调用就会执行

## 变量定义

	var variable_list data_type
	多变量可以同时赋值操作
	:= 表示声明变量并且赋值  #系统自动推断类型,不需要var关键字
	特殊变量 "_"  任何赋值 都会别丢弃 具体意义类似 
		_,numb,strs := numbers() //只获取函数返回值的后两个
	:= 左侧的变量不应该是已经被声明过的，否则会导致编译错误

## 值类型和引用类型

	通过 &i 来获取变量 i 的内存地址


​	

## Go 语言常量

	- const  可以用作枚举
	- iota const 中每新增一行常量声明将使 iota 计数一次 第一个 iota 等于 0


## Go 语言运算符

	- 算术运算符  加减乘除
	- 关系运算符   < > <= >= != == 
	- 逻辑运算符 && || ！
	- 位运算符 & | ^   >> << 
	- 
	- 

## Go 条件 语句

	-if if...else  
	- switch  fallthrough 强行执行之后的case语句
		不同的 case 之间不使用 break 分隔 默认只执行一个case
	- select
		select 会循环检测条件，如果有满足则执行并退出，
		否则一直循环检测。

## 循环语句

	- for   break continue goto
	- 实现九九乘法表


## Go 函数

	- Go 语言最少有个 main() 函数
	- 闭包
	- 函数作为一个参数
	- 函数声明  type cb func(int) int
	- 返回多个值
	- 不定参数

## Go 变量的作用域

	- 局部变量
	- 全局变量
	- 形参

## Go 数组 

	- 声明需要指定元素类型及其个数

## Go 指针

	- 一个指针变量指向了一个值的内存地址。
	- 声明指针 var-type 为指针类型
	- var p *int 

## Go 结构体

## Go 切片  

	make函数创建切片 内置类型切片("动态数组"),
	
	make([]int,3,5)
	len = 3 cap = 5
	
	如果要增加切片的容量，必须创建一个新的更大
	的切片并把原分片的内容都拷贝过来

## Go 语言范围

	range 用于for循环中迭代数组，切片，通道或者map的元素
	
	相当于 for in

## Go Map 集合

	无序的键值对的集合
	使用内建函数 make 也可以使用 map 关键字来定义 Map
	
	如果不初始化 map，那么就会创建一个 nil map。
	nil map 不能用来存放键值对
	
	声明一个map，默认为nil
	
	delete(map, key)

## Go 递归

	阶乘

## Go 类型转换

## Go 接口

	将所有共性的方法定义在一起，任何其他类型只要实现了这些方法
	就是实现了这个接口

## Go 错误处理

	defer 语句调用是遵照先进后厨出的原则

## Go 并发

	goroutine


## Go 内存分配

	- new
	- make  仅用于创建切片



## GO 的主要特性

	- 自动垃圾回收
	- 丰富的内置类型
	- 函数多返回值
	- 错误处理
	- 匿名函数和闭包
	- 类型和接口
	- 并发编程
	- 反射
	- 语言交互性


#  运算符就是简单的 & 和 * 一个取地址、一个解析地址。


## go的环境变量

set GOARCH=amd64
set GOBIN=
set GOCACHE=C:\Users\Administrator\AppData\Local\go-build
set GOEXE=.exe
set GOFLAGS=
set GOHOSTARCH=amd64
set GOHOSTOS=windows
set GOOS=windows
set GOPATH=F:\goMoudule
set GOPROXY=
set GORACE=
set GOROOT=c:\go
set GOTMPDIR=
set GOTOOLDIR=c:\go\pkg\tool\windows_amd64
set GCCGO=gccgo
set CC=gcc
set CXX=g++
set CGO_ENABLED=1
set GOMOD=
set CGO_CFLAGS=-g -O2
set CGO_CPPFLAGS=
set CGO_CXXFLAGS=-g -O2
set CGO_FFLAGS=-g -O2
set CGO_LDFLAGS=-g -O2
set PKG_CONFIG=pkg-config
set GOGCCFLAGS=-m64 -mthreads -fno-caret-diagnostics -Qunused-arguments -fmessage-length=0 -fdebug-prefix-map=C:\Users\ADMINI~1\AppData\Local\Temp\go-build595797562=/tmp/go-build -gno-record-gcc-switches

## go 的channel 详解

- 基本使用
  ch <- v    // 发送值v到Channel ch中
  v := <-ch  // 从Channel ch中接收数据，并将数据赋值给v


- 初始化
  make(chan int, 100)   100 为容量 代表channel 的缓存大小
  如果没有设置容量，或者容量设置为0, 说明Channel没有缓存，
  只有sender和receiver都准备好了后它们的通讯(communication)才会发生(Blocking)。如果设置了缓存，就有可能不发生阻塞， 只有buffer满了后 send才会阻塞， 
  而只有缓存空了后receive才会阻塞。一个nil channel不会通信。

- 通讯

c := make(chan int)
defer close(c)
go func() { c <- 3 + 4 }()
i := <-c
fmt.Println(i)


-- 接受数据
<-ch用来从channel ch中接收数据，这个表达式会一直被block,
直到有数据可以接收。
从一个nil channel中接收数据会一直被block。

从一个被close的channel中接收数据不会被阻塞，而是立即返回，
接收完已发送的数据后会返回元素类型的零值(zero value)。

如果OK 是false，表明接收的x是产生的零值，这个channel被关闭了或者为空。
x, ok := <-ch
x, ok = <-ch
var x, ok = <-ch

-- select 语句
	类似也switch  会选择一个send或者recive来执行

-- Timer和Ticker

timer是一个定时器，代表未来的一个单一事件
类似  setTimeOut
ticker 
类似 setInterval

类似timer, ticker也可以通过Stop方法来停止。一旦它停止，
接收者不再会从channel中接收数据了


channel


## go 进阶

## init 函数详解

 ###　go语言中init函数用于包(package)的初始化，该函数是go语言的一个重要特性，


1 init函数是用于程序执行前做包的初始化的函数，比如初始化包里的变量等

2 每个包可以拥有多个init函数

3 包的每个源文件也可以拥有多个init函数

4 同一个包中多个init函数的执行顺序go语言没有明确的定义(说明)

5 不同包的init函数按照包导入的依赖关系决定该初始化函数的执行顺序

6 init函数不能被其他函数调用，而是在 main函数执行之前，自动被调用

###　一个go程序的执行顺序

变量初始化->init()->main()

### 若只想执行包中的init函数，而不使用包导出的变量和函数 可用 import _  


## 结构体的赋值和初始化

type Member struct {
	name string
}

var m1 *Member
m1.name = "小明"//错误用法，未初始化,m1为nil

m1 = &Member{}
m1.name = "小明"//初始化后，结构体指针指向某个结构体地址，才能访问字段，为字段赋值。
或者
var m2 = new(Member)
m2.name = "小红"

## 结构体不能包含自己

一个结构体，并没有包含自身，比如Member中的字段不能是Member类型，但却可能是*Member。



## interface{} 的解释

1 空接口类型interface{}一个方法签名也不包含，所以所有的数据类型都实现了该方法。
2 空接口类型在描述一个对象实例的行为上力不从心，但是当我们需要存储任意数据类型的
实例的时候，空接口类型的使用使得我们得心应手。
	通俗的理解： 如果一个函数的参数包括空接口类型interface{}，实际上函数是在说“兄弟，我接受任何数据”。
	如果一个函数返回一个空接口类型，那么函数再说“我也不确定返回什么，你只要知道我一定返回一个值就好了”。


## 不同平台go build 的参数变化

### 编译linux 

命令参数 GOOS=linux;CGO_ENABLED=1

### 编译window

命令参数 GOOS=windows;CGO_ENABLED=0












​	
​	
​	









