describe("Our sample test", () => {
	it("returns true", () => {
		expect(true).to.equal(true);
	});
});

describe("Our passing test", () => {
	it("returns true", () => {
		expect(true).to.equal(true);
	});
});

describe("Our failing test", () => {
	it("returns false", () => {
		expect(true).to.equal(false);
	});
});

describe.skip("Our skipped testes", () => {
	it("does not execute", () => {
		expect(true).to.equal(true);
	});
	it.skip("is skipped", () => {
		expect(true).to.equal(false);
	});
});
