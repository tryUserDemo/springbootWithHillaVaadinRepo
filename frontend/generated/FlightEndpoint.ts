/**
 * This module is generated from FlightEndpoint.java
 * All changes to this file are overridden. Please consider to make changes in the corresponding Java file if necessary.
 * @see {@link file:///C:/Dvlp/Workspaces/githubSpringbootHillaVaadinWorkspace/springbootWithHillaVaadinRepo/src/main/java/com/example/application/FlightEndpoint.java}
 * @module FlightEndpoint
 */

// @ts-ignore
import client from './connect-client.default';
import type FlightItem from './com/example/application/FlightItem';

function _getFlightList(): Promise<Array<FlightItem>> {
 return client.call('FlightEndpoint', 'getFlightList');
}

function _save(
 newFlightItem: FlightItem | undefined
): Promise<FlightItem | undefined> {
 return client.call('FlightEndpoint', 'save', {newFlightItem});
}
export {
  _getFlightList as getFlightList,
  _save as save,
};
