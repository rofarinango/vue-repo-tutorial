import { expect, test } from 'vitest';
import { sum, addArray } from '../../src/helpers/sum';

describe('add function', () => {
  test('adds 1 + 2 to equal 3', () => {
    // Arrange
    const a = 1;
    const b = 2;

    // Action
    const result = sum(a, b);

    // Assert
    expect(result).toBe(a + b);
  });

  test('adds negative numbers correctly', () => {
    // Arrange
    const a = -1;
    const b = -2;
    // Action
    const result = sum(a, b);

    // Assert
    expect(result).toBe(-3);
  });

  test('adds 0 and 0 correctly', () => {
    const a = 0;
    const b = 0;

    const result = sum(a, b);

    expect(result).toBe(0);
  });
});

describe('addArray function', () => {
  test('should return 0 if the array is empty', () => {
    const numberArray: number[] = [];

    const result = addArray(numberArray);

    expect(result).toBe(0);
  });

  test('should return the proper value of the addArray function', () => {
    const numberArray = [1, 2, 3, 4, 5];
    const result = addArray(numberArray);
    expect(result).toBe(15);
  });
});
