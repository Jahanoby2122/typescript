interface Developer {
    name:string,
    salary:number,
    device:{
        brand: string,
        model: string,
        releseYear: string
    }
    
}





const poorDeveloper: Developer = {
    name: 'John Doe',
    salary: 50000,
    device: {
        brand: 'Dell',
        model: 'Inspiron 15',
        releseYear: '2018'
    }
}