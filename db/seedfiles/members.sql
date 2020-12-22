create table memberinfo (memid Serial Primary Key, mfirstname varchar(15), mlastname varchar(25), memail VARCHAR(50), auth_id varchar(60));

insert into memberinfo (mfirstname, mlastname, memail,auth_id)

VALUES
('Brian','McCann','brian@solutionation.net','google-oauth2|101360824977997119807')
