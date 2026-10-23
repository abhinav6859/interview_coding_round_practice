

class Guest  {


  constructor(public readonly id : string, public name : string) {
    if (typeof id !== "string" || id.trim() === "") {
      throw new Error("Guest ID must be a non-empty string");
    }

    if (typeof name !== "string" || name.trim() === "") {
      throw new Error("Guest name must be a non-empty string");
    }

  }
}
export default Guest;