export default class Cl_calculos{
    constructor(){
        this.contMujeresMayorEdad=0;
        this.contpersonas=0;
        this.contmujeres=0;
        this.conthombres=0
        this.acumedad=0;
    }
    
    procesarpersonas(p){
        if (p.edad > 18 && this.sexo == "M")
            this.acumedad++;
        else if (p.edad > 18 && this.sexo == "F")
            this.acumedad++;
    }

    edadpromedio(){
        return this.acumedad/this.contpersonas;
    }
    
    calcularedadmayormujeres(){
        if (this.edad > 18 && this.sexo == "F")
            this.contMujeresMayorEdad++;
    }
}

