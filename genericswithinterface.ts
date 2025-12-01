interface Developer <t> {
    name:string,
    salary:number,
    device:{
        brand: string,
        model: string,
        releseYear: string
    };
    smartWatch: t
    
}

type Smartwatchtype = {
    heartRate: string;
    stopWatch: boolean
}




const poorDeveloper: Developer<Smartwatchtype> = {
    name: 'John Doe',
    salary: 50000,
    device: {
        brand: 'Dell',
        model: 'Inspiron 15',
        releseYear: '2018'
    },
    smartWatch:{
        heartRate: '80 bpm',
        stopWatch: false
    }
}


type Smartwatchtypereach = {
    heartRate: string;
   
}


const reachDeveloper: Developer<Smartwatchtypereach> = {
    name: ' Doe',
    salary: 10000,
    device: {
        brand: 'Lenivo',
        model: 'Inspiron 15',
        releseYear: '2010'
    },
    smartWatch:{
        heartRate: '880 bpm',
       
    }
}