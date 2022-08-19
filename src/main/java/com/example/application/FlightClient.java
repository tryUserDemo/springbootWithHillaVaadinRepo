package com.example.application;

import java.util.Arrays;
import java.util.List;

import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class FlightClient {

	private static String ALL_FLIGHT_URL = "http://localhost:7070/demoJSF/flightApi/getAllFlightDtoList";

	public List<FlightItem> getAllFlights() {
		RestTemplate restTemplate = new RestTemplate();
		List<FlightItem> responseList = null;
		ResponseEntity<FlightItem[]> responseEntity = restTemplate.getForEntity(ALL_FLIGHT_URL, FlightItem[].class);
		responseList = Arrays.asList(responseEntity.getBody());
		return responseList;
	}
	
	private static String SAVE_FLIGHT_URL = "http://localhost:7070/demoJSF/flightApi/saveFlightDto";

	public FlightItem saveFlight(FlightItem newFlight) {
		RestTemplate restTemplate = new RestTemplate();
		HttpEntity<FlightItem> request = new HttpEntity<>(newFlight);
		FlightItem item = restTemplate.postForObject(SAVE_FLIGHT_URL, request, FlightItem.class);
		return item;
	}

}
