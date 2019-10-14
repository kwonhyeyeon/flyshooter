<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="/resources/css/reset.css" />
<link rel="stylesheet" type="text/css" href="/resources/css/style.css" />
<title>개인정보 취급방침</title>
</head>
<body>
<h1 class="termsTitle">개인정보 취급방침</h1>
<c:forEach var="term" items="${data}">
	<c:if test="${term.ctype == 2}">
		<div id="termsAll" class="embed">${term.content}</div>
	</c:if>
</c:forEach>
</body>
</html>