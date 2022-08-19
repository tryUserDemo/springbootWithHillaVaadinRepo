package com.example.application;

import java.io.Serializable;
import java.util.Date;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class FlightItem implements Serializable {

	private static final long serialVersionUID = 1L;


	private Long id;

	@NotBlank(message="Please enter the airline")
    private String airline;

	@NotBlank(message="Please enter the fromAirport")
    private String fromAirport;

	@NotBlank(message="Please enter the toAirport")
    private String toAirport;

	@NotNull(message="Please enter the scheduleDateTime")
    private Date scheduledDateTime;

    private Date estimatedDateTime;

    private Date actualDateTime;

}