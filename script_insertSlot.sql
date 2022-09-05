DECLARE @a int = 0
WHILE @a < 40
BEGIN
    SET @a = @a + 1
    INSERT INTO [Slots] VALUES('A'+CONVERT(nvarchar, @a), 0, 1)
	INSERT INTO [Slots] VALUES('B'+CONVERT(nvarchar, @a), 0, 1)
	INSERT INTO [Slots] VALUES('C'+CONVERT(nvarchar, @a), 0, 1)
	INSERT INTO [Slots] VALUES('D'+CONVERT(nvarchar, @a), 0, 2)
	INSERT INTO [Slots] VALUES('E'+CONVERT(nvarchar, @a), 0, 3)
END