class Student {
  private nickname : string
  private age : number
  private year : number
  constructor(nickname : string , age : number , year : number) {
    this.nickname = nickname
    this.age = age
    this.year = year
  }
  public getNickname() :string {
    return this.nickname
  }
  public getAge() :number {
    return this.age
  }
  public getYear() :number {
    return this.year
  }

}

export {
  Student
}
