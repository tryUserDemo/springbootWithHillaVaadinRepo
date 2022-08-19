// @ts-nocheck

import FlightItem from './FlightItem';

import {ObjectModel,StringModel,NumberModel,ArrayModel,BooleanModel,Required,ModelValue,_getPropertyModel} from '@hilla/form';

import {Email,Null,NotNull,NotEmpty,NotBlank,AssertTrue,AssertFalse,Negative,NegativeOrZero,Positive,PositiveOrZero,Size,Past,Future,Digits,Min,Max,Pattern,DecimalMin,DecimalMax} from '@hilla/form';

/**
 * This module is generated from com.example.application.FlightItem.
 * All changes to this file are overridden. Please consider to make changes in the corresponding Java file if necessary.
 * @see {@link file:///C:/Dvlp/Workspaces/githubSpringbootHillaVaadinWorkspace/springbootWithHillaVaadinRepo/src/main/java/com/example/application/FlightItem.java}
 */
export default class FlightItemModel<T extends FlightItem = FlightItem> extends ObjectModel<T> { 
  static createEmptyValue: () => FlightItem;

  get ıd(): NumberModel {
    return this[_getPropertyModel]('ıd', NumberModel, [true]);
  }

  get airline(): StringModel {
    return this[_getPropertyModel]('airline', StringModel, [true, new NotBlank({message:"Please enter the airline"})]);
  }

  get fromAirport(): StringModel {
    return this[_getPropertyModel]('fromAirport', StringModel, [true, new NotBlank({message:"Please enter the fromAirport"})]);
  }

  get toAirport(): StringModel {
    return this[_getPropertyModel]('toAirport', StringModel, [true, new NotBlank({message:"Please enter the toAirport"})]);
  }

  get scheduledDateTime(): StringModel {
    return this[_getPropertyModel]('scheduledDateTime', StringModel, [true, new NotNull({message:"Please enter the scheduleDateTime"})]);
  }

  get estimatedDateTime(): StringModel {
    return this[_getPropertyModel]('estimatedDateTime', StringModel, [true]);
  }

  get actualDateTime(): StringModel {
    return this[_getPropertyModel]('actualDateTime', StringModel, [true]);
  }
}
