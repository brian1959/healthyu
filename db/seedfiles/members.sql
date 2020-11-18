create table memberinfo (memid Serial Primary Key, mfirstname varchar(15), mlastname varchar(25), maddress varchar(35), mcity varchar(25) , mstate char(2), mzip INT, memail VARCHAR(50));

insert into memberinfo (mfirstname, mlastname, maddress, mcity, mstate, mzip, memail)

VALUES
('Brian','McCann','6968 W Flaming Sky Ct', 'West Jordan', 'UT', 84081,'brian@solutionation.net'),
('Donna','McCann','6968 W Flaming Sky Ct', 'West Jordan', 'UT', 84081,'dmjmccann@gmail.com'),
('Kandis', 'Mortensen','6768 S Amber Sky Ct','West Jordan','UT', 84081, 'callmeKam@yahoo.com'),
('Cody','Glad','6499 W Dusky Dr','West Jordan','UT',  84081, 'codymglad@gmail.com'); 