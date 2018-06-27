# Foreword

The job of Data Scientist is mostly about applying statistics and modern math. It is also about programming. But it is usually not about object-oriented design and applications development. However, knowing the basics of OOP can make Data Scientist's life easier. Applied right, this technique increases maintainability and reusability of the code. Good news is that Python, as one of the most used languages in DS, does not enforce a lot of classic OOP principles. It allows creating OO-code in a less strict manner than Java. Multiparadigm nature of Python even makes the presence of OO-capability of this language less obvious until some point.

# When it is needed

The main point I am making here is that OOP is not a silver bullet and should be used wisely as any other technique.

OOP is needed when there is a mutable state that should be handled. In fact, a problem of handling a mutable state led to an introduction of this paradigm. Objects can isolate different concepts of a software system in terms of data and processing flow.

# Basic concepts

## Encapsulation

Isolating state and behavior of some entity of business domain. Or just some entity with known and clearly defined intends.

## Inheritance

A beast that has to be used less often than the books say it should. Besides introducing a level of abstraction and the means for code reuse, it also can introduce troubles of subclasses being too heavy or fragile.

When they are heavy, it is hard to instantiate them, because a lot of dependencies are required for them to run. When classes are fragile, it is difficult to extend them properly. Sometimes one can forget to override some methods hidden deeply in abstract superclasses. Both heaviness and fragility are introduced with inheritance, but the issue here is its overuse, not the technique itself.

## Polymorphism

A powerful feature of OOP which is less obvious in Python rather than in Java. It applies to class hierarchies. Consider a base class that has two inheritors. All of them have a method named identically but implemented differently in all classes. Then consider a function that accepts any class object from this hierarchy as a parameter. One can call the method of the object in the function without knowing exactly the object of which class was passed. This is a polymorphism in action.

# Principles

## SOLID

These principles are hard to fully understand without a lot of practice. Usually, one's design fails if one or several principles are violated.

- Single Responsibility

A class maintains only one entity of business domain or addresses one particular issue. For example, a class that implements list should not mess with the items it stores.

- Open/Closed

A class should be opened to an extension but closed for modification. This principle is formulated in a mysterious way. Essentially, it means that one should not modify a class to extend it. So it is related to proper use of encapsulation.

- Liskov Substitution

A superclass can be used instead of base class everywhere. This principle related to polymorphism. If polymorphism is implemented properly, then the principle does not get violated. For example, an inheritor always should extend its parent by adding more details but not reducing its functionality by any means.

- Interface Segregation

Many specific interfaces are better than one generic. It means that introducing a generic interface for all purposes is a bad idea. Eventually, this design decision would lead to multitudes of irrelevant method implementations in subclasses.

- Dependency Inversion

A class should depend on the most generic version of its dependency. Adhering to this principle makes usage of polymorphism possible.

Also, problems are often caused by violation of YAGNI and KISS principles. However, it is not an OO-specific issue.

# Patterns

The idea of patterns is to bring a solution of the known problem in the current context. I do not think that knowing of OO-patterns is crucial for Data Scientist. Nevertheless one should know they exist and check them out someday when the design of one's code does not satisfy anymore.

# FP and OOP

Surprisingly, functional and OO-programming is sometimes considered as mutually exclusive approaches. However, they can work together well. Python treats functions as first-class citizens. Passing them as parameters is widely used. Replacing object's methods at runtime by setting a function or lambda to them is also just fine. It allows providing unit testing without bothering about mocks.

