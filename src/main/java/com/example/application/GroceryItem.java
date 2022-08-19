package com.example.application;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class GroceryItem {

    @NotBlank
    private String name;

    @NotNull
    @Min(value = 1)
    private Integer quantity;

}
