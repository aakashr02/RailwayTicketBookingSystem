package com.rtbs.userservice.dto;

import java.util.List;

public class CancellationRequest {
	private int userId;
	private List<Integer> pnr;
	public CancellationRequest(int userId, List<Integer> pnr) {
		super();
		this.userId = userId;
		this.pnr = pnr;
	}
	public CancellationRequest() {
		super();
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public List<Integer> getPnr() {
		return pnr;
	}
	public void setPnr(List<Integer> pnr) {
		this.pnr = pnr;
	}
	@Override
	public String toString() {
		return "CancellationRequest [userId=" + userId + ", pnr=" + pnr + "]";
	}
	
	
}
