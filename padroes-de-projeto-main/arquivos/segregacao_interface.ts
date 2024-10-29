interface Bird {
    fly():void
    eat():void
    run():void
}

class Tucan implements Bird {
    public fly(){}
    public eat(){}
    public run(){}
}

class HumminBird implements Bird{
    public fly(){}
    public eat(){}
    public run(){}
}

class Ostrich implements Bird {
    public fly(){
        throw new Error("ave nao voa")
    }
    public eat(){}
    public run(){}
}