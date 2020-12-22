INSERT INTO memberinfo
    (mfirstname, mlastname,memail,  auth_id)
VALUES
    ($1, $2, $3, $4)
returning *;