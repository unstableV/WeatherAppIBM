package com.ibm.training;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class UserController {
	
	
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping("/getweather")
	private static  String getEmployees(@RequestParam("city") String city,@RequestParam("country") String country)
	{
	
	    final String uri = "http://api.openweathermap.org/data/2.5/weather?q=" +city+'&'+country+ "&mode=json&appid="+"25526a3531a5bfabc7661ab9dab34927"+"&units=metric";

	    RestTemplate restTemplate = new RestTemplate();
	    String result = restTemplate.getForObject(uri, String.class);

	    return result;
	
	
	}
}
