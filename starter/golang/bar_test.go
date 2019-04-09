package bar

import "testing"

func TestFoo(t *testing.T) {
	t.Run("7", testFooFunc(7, 7))
	t.Run("8", testFooFunc(8, 8))
}

func testFooFunc(num int, expected int) func(t *testing.T) {
	return func(t *testing.T) {
		actual := Foo(num)
		if actual != expected {
			t.Errorf("Expected the sum of %v to be %d but instead got %d!", num, expected, actual)
		}
	}
}
