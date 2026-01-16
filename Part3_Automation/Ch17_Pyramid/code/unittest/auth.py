from auth import is_valid_email

def test_is_valid_email():
    assert is_valid_email("test@example.com") == True

def test_is_not_valid_email():
    assert is_valid_email("invalid-email") == False
