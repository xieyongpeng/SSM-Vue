package com.ssmVue.test;

import java.util.List;

import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.ssmVue.domain.bean.User;
import com.ssmVue.domain.service.interfaces.IUserService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:applicationContext.xml")
public class Test {
	
	@Autowired
    private IUserService userService;
	
	@org.junit.Test
    public void testFindAll(){
        List<User> users = userService.findAll();
        System.out.println(users);
    }
}
