import { gql } from 'apollo-server-express';

export const entitySchema = gql`
  input AutoCompleteByEntityInput {
    entity: String!
    offset: Int
    totalCount: Int
    limit: Int
  }

  input AddEntityParent {
    id: String!
    entity: String
  }

  input AddEntityInput {
    entity: JSON
    parent: AddEntityParent
  }

  input ListEntityInput {
    entity: JSON
  }

  type AutoCompleteOptionShape {
    displayValue: String!
    value: String
    id: String
  }

  type AutoCompleteResponse {
    data: [AutoCompleteOptionShape]
    errorMessage: String
  }

  extend type Query {
    # Timestamp
    add42839(input: AddEntityInput): GenericEntity
    list42839(input: ListEntityInput): GenericEntity
    get42839(id: String): GenericEntity
    delete42839(id: String): GenericEntity
    update42839(entity: JSON): GenericEntity
    autoComplete42839(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Customer
    add42841(input: AddEntityInput): GenericEntity
    list42841(input: ListEntityInput): GenericEntity
    get42841(id: String): GenericEntity
    delete42841(id: String): GenericEntity
    update42841(entity: JSON): GenericEntity
    autoComplete42841(input: AutoCompleteByEntityInput): AutoCompleteResponse
    addToPromotionList42841(input: CustomActionArgs): GenericEntity

    # CustomerId
    add42842(input: AddEntityInput): GenericEntity
    list42842(input: ListEntityInput): GenericEntity
    get42842(id: String): GenericEntity
    delete42842(id: String): GenericEntity
    update42842(entity: JSON): GenericEntity
    autoComplete42842(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # FirstName
    add42843(input: AddEntityInput): GenericEntity
    list42843(input: ListEntityInput): GenericEntity
    get42843(id: String): GenericEntity
    delete42843(id: String): GenericEntity
    update42843(entity: JSON): GenericEntity
    autoComplete42843(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # LastName
    add42844(input: AddEntityInput): GenericEntity
    list42844(input: ListEntityInput): GenericEntity
    get42844(id: String): GenericEntity
    delete42844(id: String): GenericEntity
    update42844(entity: JSON): GenericEntity
    autoComplete42844(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # StateMailing
    add42845(input: AddEntityInput): GenericEntity
    list42845(input: ListEntityInput): GenericEntity
    get42845(id: String): GenericEntity
    delete42845(id: String): GenericEntity
    update42845(entity: JSON): GenericEntity
    autoComplete42845(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # CountryMailing
    add42846(input: AddEntityInput): GenericEntity
    list42846(input: ListEntityInput): GenericEntity
    get42846(id: String): GenericEntity
    delete42846(id: String): GenericEntity
    update42846(entity: JSON): GenericEntity
    autoComplete42846(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # CityMailing
    add42847(input: AddEntityInput): GenericEntity
    list42847(input: ListEntityInput): GenericEntity
    get42847(id: String): GenericEntity
    delete42847(id: String): GenericEntity
    update42847(entity: JSON): GenericEntity
    autoComplete42847(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # AddrTypeMailing
    add42848(input: AddEntityInput): GenericEntity
    list42848(input: ListEntityInput): GenericEntity
    get42848(id: String): GenericEntity
    delete42848(id: String): GenericEntity
    update42848(entity: JSON): GenericEntity
    autoComplete42848(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # AgeBracket
    add42849(input: AddEntityInput): GenericEntity
    list42849(input: ListEntityInput): GenericEntity
    get42849(id: String): GenericEntity
    delete42849(id: String): GenericEntity
    update42849(entity: JSON): GenericEntity
    autoComplete42849(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # ContactEmail
    add42850(input: AddEntityInput): GenericEntity
    list42850(input: ListEntityInput): GenericEntity
    get42850(id: String): GenericEntity
    delete42850(id: String): GenericEntity
    update42850(entity: JSON): GenericEntity
    autoComplete42850(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Gender
    add42851(input: AddEntityInput): GenericEntity
    list42851(input: ListEntityInput): GenericEntity
    get42851(id: String): GenericEntity
    delete42851(id: String): GenericEntity
    update42851(entity: JSON): GenericEntity
    autoComplete42851(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # CreditRating
    add42853(input: AddEntityInput): GenericEntity
    list42853(input: ListEntityInput): GenericEntity
    get42853(id: String): GenericEntity
    delete42853(id: String): GenericEntity
    update42853(entity: JSON): GenericEntity
    autoComplete42853(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # MaritalStatus
    add42854(input: AddEntityInput): GenericEntity
    list42854(input: ListEntityInput): GenericEntity
    get42854(id: String): GenericEntity
    delete42854(id: String): GenericEntity
    update42854(entity: JSON): GenericEntity
    autoComplete42854(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Sale
    add42855(input: AddEntityInput): GenericEntity
    list42855(input: ListEntityInput): GenericEntity
    get42855(id: String): GenericEntity
    delete42855(id: String): GenericEntity
    update42855(entity: JSON): GenericEntity
    autoComplete42855(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # SaleType
    add42856(input: AddEntityInput): GenericEntity
    list42856(input: ListEntityInput): GenericEntity
    get42856(id: String): GenericEntity
    delete42856(id: String): GenericEntity
    update42856(entity: JSON): GenericEntity
    autoComplete42856(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # NetPaidShipTax
    add42857(input: AddEntityInput): GenericEntity
    list42857(input: ListEntityInput): GenericEntity
    get42857(id: String): GenericEntity
    delete42857(id: String): GenericEntity
    update42857(entity: JSON): GenericEntity
    autoComplete42857(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # NetProfit
    add42858(input: AddEntityInput): GenericEntity
    list42858(input: ListEntityInput): GenericEntity
    get42858(id: String): GenericEntity
    delete42858(id: String): GenericEntity
    update42858(entity: JSON): GenericEntity
    autoComplete42858(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # DiscountGiven
    add42859(input: AddEntityInput): GenericEntity
    list42859(input: ListEntityInput): GenericEntity
    get42859(id: String): GenericEntity
    delete42859(id: String): GenericEntity
    update42859(entity: JSON): GenericEntity
    autoComplete42859(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # ItemCategory
    add42860(input: AddEntityInput): GenericEntity
    list42860(input: ListEntityInput): GenericEntity
    get42860(id: String): GenericEntity
    delete42860(id: String): GenericEntity
    update42860(entity: JSON): GenericEntity
    autoComplete42860(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # ItemClass
    add42861(input: AddEntityInput): GenericEntity
    list42861(input: ListEntityInput): GenericEntity
    get42861(id: String): GenericEntity
    delete42861(id: String): GenericEntity
    update42861(entity: JSON): GenericEntity
    autoComplete42861(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Item
    add42862(input: AddEntityInput): GenericEntity
    list42862(input: ListEntityInput): GenericEntity
    get42862(id: String): GenericEntity
    delete42862(id: String): GenericEntity
    update42862(entity: JSON): GenericEntity
    autoComplete42862(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Manufacturer
    add42863(input: AddEntityInput): GenericEntity
    list42863(input: ListEntityInput): GenericEntity
    get42863(id: String): GenericEntity
    delete42863(id: String): GenericEntity
    update42863(entity: JSON): GenericEntity
    autoComplete42863(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # QuantityOnHand
    add42864(input: AddEntityInput): GenericEntity
    list42864(input: ListEntityInput): GenericEntity
    get42864(id: String): GenericEntity
    delete42864(id: String): GenericEntity
    update42864(entity: JSON): GenericEntity
    autoComplete42864(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Promotion
    add42865(input: AddEntityInput): GenericEntity
    list42865(input: ListEntityInput): GenericEntity
    get42865(id: String): GenericEntity
    delete42865(id: String): GenericEntity
    update42865(entity: JSON): GenericEntity
    autoComplete42865(input: AutoCompleteByEntityInput): AutoCompleteResponse
  }
`;
