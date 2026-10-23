class User {
    constructor(
        public name: string,
        public readonly phone: string
    ) {
        if (typeof name !== "string" || name.trim() === "") {
            throw new Error("Invalid name");
        }

        if (!/^[6-9]\d{9}$/.test(phone)) {
            throw new Error("Invalid phone");
        }
    }
}