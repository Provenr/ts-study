function classDeco(): ClassDecorator {
  return (target: Object) => {
    console.log('Class Decorator Invoked')
    console.log(target)
  }
}
function propDeco(): PropertyDecorator {
  return (target: Object, propertyKey: string | symbol) => {
    console.log('Property Decorator Invoked')
    console.log(propertyKey)
  }
}
function methDeco(): MethodDecorator {
  return (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    console.log('Method Decorator Invoked')
    console.log(propertyKey)
    console.log(descriptor)
  }
}
function paramDeco(): ParameterDecorator {
  return (target: Object, propertyKey: string | symbol, index: number) => {
    console.log('Param Decorator Invoked')
    console.log(propertyKey)
  }
}

enum DecoratorType {
  CLASS = 'CLass',
  METHOD = 'METHOD',
  PROPERTY = 'PROPERTY',
  PARAM = 'PARAM'
}
type FactoryType = ClassDecorator | PropertyDecorator | MethodDecorator | ParameterDecorator
