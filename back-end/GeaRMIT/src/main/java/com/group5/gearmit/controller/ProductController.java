package com.group5.gearmit.controller;

import com.group5.gearmit.entity.Product;
import com.group5.gearmit.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
public class ProductController {

    private ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping(value = "/api/product")
    public List<Map<String, Object>> getAllProduct() {
        return productService.getAllProduct();
    }

    @GetMapping(value = "/api/product/name/{name}")
    public List<Map<String, Object>> getProductByName(@PathVariable("name") String productName) {
        return productService.getProductByName(productName);
    }

    @GetMapping(value = "/api/product/category_name/{name}")
    public List<Map<String, Object>> getProductByCategoryName(@PathVariable("name") String categoryName) {
        return productService.getProductByCategoryName(categoryName);
    }

    @GetMapping(value = "/api/product/brand_name/{name}")
    public List<Map<String, Object>> getProductByBrandName(@PathVariable("name") String brandName) {
        return productService.getProductByBrandName(brandName);
    }

    @PostMapping(value = "/api/product")
    public Map<String, String> addProduct(@RequestBody Map<Object, Object> productJson) {
        return productService.addProduct(productJson);
    }

    @GetMapping(value = "/api/product/id/{id}")
    public Product getProductObjectByID(@PathVariable("id") String id) {
        return productService.getProductObjectByID(id);
    }

    @DeleteMapping(value = "/api/product/id/{productID}")
    public Map<String, String> deleteProductByID(@PathVariable("productID") String productID) {
        return productService.deleteProduct(productID);
    }
}
