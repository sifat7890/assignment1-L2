What are some differences between interfaces and types in TypeScript?

Interface and type are used to define the structure of objects.

Interface:
1.Interface is a syntactical contract.

2.It is less flexible compared to type.

3.Uses the interface keyword.

4.used for implementation and extends in classes.

5.Supports the use of an objects.


Types:
1.Types is called a collection  of data types.

2.It is more flexible than interface.

3.In types uses the type keyword.

4.Does not have any implementation purposes.

5.Types does not inherently support the use of an object.




What is the use of the keyof keyword in TypeScript? Provide an example.

Keyof is a keyword in typescript which is used to extract the key from an object type.
Most of the time its use for generic functions and dynamic key access.


Example:
type Student={
name:string;
age:number;
grade:string;
}

function getStudentInfo (student:Student,key:keyof Student){
return student[key];
}

const s1:Student={
name:"omar",
age:18,
grade:"A"

};


console.log(getStudentInfo(s1,"name"));
