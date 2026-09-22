from main import trivia_fetch

#Test 1
def test_trivia_10():
    trivia = trivia_fetch(10)
    assert len(trivia["results"]) == 10

#Test 2
def test_trivia_5():
    trivia = trivia_fetch(5)
    assert len(trivia["results"]) == 5