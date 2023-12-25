package com.codesite.ecommece_backend.model;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Product {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	@Column(name="title")
	private String title;
	
	@Column(name="description")
	private String description;
	
	@Column(name="price")
	private int price;
	
	
	@Column(name="discounted_price")
	private int discountedPrice;
	
	
	private int quantity;
	
	private String brand;
	
	
	private String color;
	
	@Embedded
	@ElementCollection
	@Column(name="sizes")
	private Set<Size> sizes=new HashSet<>();
	
	@Column(name="image_url")
	private String imageUrl;
	
	@OneToMany(mappedBy="product" ,cascade=CascadeType.ALL,orphanRemoval=true)
	private List<Rating> rating=new ArrayList<>();
	
	@OneToMany(mappedBy="product" ,cascade=CascadeType.ALL,orphanRemoval=true)
	private List<Review> review=new ArrayList<>();
	
	@Column(name="num_ratings")
	private int numRatings;
	
	
	
	
	
	
}
