package com.example.application;

import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

import com.vaadin.flow.server.auth.AnonymousAllowed;

import dev.hilla.Endpoint;
import dev.hilla.Nonnull;

@Endpoint
@AnonymousAllowed
public class GroceryEndpoint {

    private final List<GroceryItem> groceries = new CopyOnWriteArrayList<>();

    public @Nonnull List<@Nonnull GroceryItem> getGroceries() {
        return this.groceries;
    }

    public GroceryItem save(GroceryItem groceryItem) {
        groceries.add(groceryItem);
        return groceryItem;
    }


}
