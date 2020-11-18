create table purchase_detail (purid Serial Primary Key, memid INT, puritem VARCHAR(20),purcost INT, purdate TIMESTAMP);

insert into purchase_detail (memid, puritem, purcost, purdate)

VALUES
(1,
'nibble',10, '2020-10-05'),
(2, 'snack', 25, '2020-10-06'),
(3, 'feast', 75, '2020-10-15'),
(1, 'autoimmune',5, '2020-10-15'); 