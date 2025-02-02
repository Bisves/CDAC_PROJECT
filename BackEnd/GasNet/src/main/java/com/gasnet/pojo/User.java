package com.gasnet.pojo;

import java.time.LocalDate;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "User")
public class User extends BaseUser {
	
	@Column(name = "user_name",length = 25)
	private String userName;
	@Column(name = "first_name",length = 25)
	private String firstName;
	@Column(name = "last_name",length = 25)
	private String lastName;
	@Column(name = "dob")
	private LocalDate dob;
	@Column(name = "phone_no",length = 25,unique = true)
	private String phoneNo;
	@Column(name = "email",length = 50,unique = true)
	private String email;
	@Column(name = "password",length = 500)
	private String password;
	@Column(name = "aadhar_card",length = 25,unique = true)
	private String aadharCard;
	@Column(name = "pan_card",length = 25,unique = true)
	private String panCard;
	@Column(name = "user_role")
	@Enumerated(EnumType.STRING)
	private Role userRole;
	@Column(name = "user_status")
	@Enumerated(EnumType.STRING)
	private Status userStatus;
	@JoinColumn(name = "address_id")
	@ManyToOne(cascade = CascadeType.ALL)
	private Address address;
}
