package com.example.application;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.vaadin.flow.server.auth.AnonymousAllowed;

import dev.hilla.Endpoint;
import dev.hilla.Nonnull;

@Endpoint
@AnonymousAllowed
public class FlightEndpoint {

	@Autowired FlightClient client;
	
    public @Nonnull List<@Nonnull FlightItem> getFlightList() {
    	return client.getAllFlights();
    }

    public FlightItem save(FlightItem newFlightItem) {
    	return client.saveFlight(newFlightItem);
    }

}
