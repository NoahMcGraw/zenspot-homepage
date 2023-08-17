import debounce from 'utils/debounce';

jest.useFakeTimers(); // Use Jest's timer mocks

describe('debounce', () => {
  it('should execute the function immediately if not within a timeout period', () => {
    const callback = jest.fn();
    const debounced = debounce(callback, 100);

    debounced('test argument');

    expect(callback).toHaveBeenCalledWith('test argument');
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should not execute the function again if called within the timeout period', () => {
    const callback = jest.fn();
    const debounced = debounce(callback, 100);

    debounced('test argument 1');
    debounced('test argument 2');

    expect(callback).toHaveBeenCalledWith('test argument 1');
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should execute the function again if called after the timeout period', () => {
    const callback = jest.fn();
    const debounced = debounce(callback, 100);

    debounced('test argument 1');
    jest.advanceTimersByTime(101); // Simulate passage of time
    debounced('test argument 2');

    expect(callback).toHaveBeenCalledWith('test argument 2');
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it('should clear the timeout after the wait period', () => {
    const callback = jest.fn();
    const debounced = debounce(callback, 100);
    jest.spyOn(global, 'clearTimeout'); // Spy on clearTimeout

    debounced('test argument');
    jest.advanceTimersByTime(100);

    expect(clearTimeout).toHaveBeenCalled(); // Verify that clearTimeout was called
  });
});
