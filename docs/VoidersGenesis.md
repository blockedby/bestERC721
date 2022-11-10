# VoidersGenesis



> VoidersGenesis is ERC721A-compatible contract.





## Methods

### approve

```solidity
function approve(address to, uint256 tokenId) external payable
```



*Gives permission to `to` to transfer `tokenId` token to another account. The approval is cleared when the token is transferred. Only a single account can be approved at a time, so approving the zero address clears previous approvals. Requirements: - The caller must own the token or be an approved operator. - `tokenId` must exist. Emits an {Approval} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| to | address | undefined |
| tokenId | uint256 | undefined |

### balanceOf

```solidity
function balanceOf(address owner) external view returns (uint256)
```



*Returns the number of tokens in `owner`&#39;s account.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### baseTokenURI

```solidity
function baseTokenURI() external view returns (string)
```



*Returns baseTokenURI.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### changeBaseTokenURI

```solidity
function changeBaseTokenURI(string _newBaseTokenURI) external nonpayable
```



*Changes baseTokenURI.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _newBaseTokenURI | string | new URI for all tokens |

### changeContractURI

```solidity
function changeContractURI(string _newContractURI) external nonpayable
```



*Changes baseContractURI.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _newContractURI | string | new URI for all tokens |

### changePresaleTime

```solidity
function changePresaleTime(uint128 _newStartTime, uint128 _newEndTime) external nonpayable
```



*Changes presale start time in case of emergency.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _newStartTime | uint128 | undefined |
| _newEndTime | uint128 | undefined |

### contractURI

```solidity
function contractURI() external view returns (string)
```



*Returns contractURI.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### getApproved

```solidity
function getApproved(uint256 tokenId) external view returns (address)
```



*Returns the account approved for `tokenId` token. Requirements: - `tokenId` must exist.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### isApprovedForAll

```solidity
function isApprovedForAll(address owner, address operator) external view returns (bool)
```



*Returns if the `operator` is allowed to manage all of the assets of `owner`. See {setApprovalForAll}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined |
| operator | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### maxTotalSupply

```solidity
function maxTotalSupply() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### mintedFromWhitelist

```solidity
function mintedFromWhitelist(address) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### name

```solidity
function name() external view returns (string)
```



*Returns the token collection name.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### ownerMintForSell

```solidity
function ownerMintForSell() external nonpayable
```



*Mints the rest of the tokens to owner for selling.*


### ownerOf

```solidity
function ownerOf(uint256 tokenId) external view returns (address)
```



*Returns the owner of the `tokenId` token. Requirements: - `tokenId` must exist.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### ownerWithdrawETH

```solidity
function ownerWithdrawETH() external nonpayable
```



*Withdraws presell rewards.*


### presaleEndTime

```solidity
function presaleEndTime() external view returns (uint128)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint128 | undefined |

### presaleMint

```solidity
function presaleMint(bytes signature) external payable
```



*Mints a token to an approved address with discount.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| signature | bytes | of whitelisted address from whitelist checker |

### presalePrice

```solidity
function presalePrice() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### presaleStartTime

```solidity
function presaleStartTime() external view returns (uint128)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint128 | undefined |

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.*


### safeTransferFrom

```solidity
function safeTransferFrom(address from, address to, uint256 tokenId) external payable
```



*Equivalent to `safeTransferFrom(from, to, tokenId, &#39;&#39;)`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined |
| to | address | undefined |
| tokenId | uint256 | undefined |

### safeTransferFrom

```solidity
function safeTransferFrom(address from, address to, uint256 tokenId, bytes _data) external payable
```



*Safely transfers `tokenId` token from `from` to `to`. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined |
| to | address | undefined |
| tokenId | uint256 | undefined |
| _data | bytes | undefined |

### setApprovalForAll

```solidity
function setApprovalForAll(address operator, bool approved) external nonpayable
```



*Approve or remove `operator` as an operator for the caller. Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller. Requirements: - The `operator` cannot be the caller. Emits an {ApprovalForAll} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| operator | address | undefined |
| approved | bool | undefined |

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) external view returns (bool)
```



*Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding [EIP section](https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified) to learn more about how these ids are created. This function call must use less than 30000 gas.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| interfaceId | bytes4 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### symbol

```solidity
function symbol() external view returns (string)
```



*Returns the token collection symbol.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### tokenURI

```solidity
function tokenURI(uint256 _tokenId) external view returns (string)
```



*Returns URI for exact token.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _tokenId | uint256 | uint256 ID of the token to query |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### totalSupply

```solidity
function totalSupply() external view returns (uint256)
```



*Returns the total number of tokens in existence. Burned tokens will reduce the count. To get the total number of tokens minted, please see {_totalMinted}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### transferFrom

```solidity
function transferFrom(address from, address to, uint256 tokenId) external payable
```



*Transfers `tokenId` from `from` to `to`. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. Emits a {Transfer} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined |
| to | address | undefined |
| tokenId | uint256 | undefined |

### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined |

### whitelistChecker

```solidity
function whitelistChecker() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |



## Events

### Approval

```solidity
event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner `indexed` | address | undefined |
| approved `indexed` | address | undefined |
| tokenId `indexed` | uint256 | undefined |

### ApprovalForAll

```solidity
event ApprovalForAll(address indexed owner, address indexed operator, bool approved)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner `indexed` | address | undefined |
| operator `indexed` | address | undefined |
| approved  | bool | undefined |

### ConsecutiveTransfer

```solidity
event ConsecutiveTransfer(uint256 indexed fromTokenId, uint256 toTokenId, address indexed from, address indexed to)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| fromTokenId `indexed` | uint256 | undefined |
| toTokenId  | uint256 | undefined |
| from `indexed` | address | undefined |
| to `indexed` | address | undefined |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |

### Transfer

```solidity
event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| from `indexed` | address | undefined |
| to `indexed` | address | undefined |
| tokenId `indexed` | uint256 | undefined |



## Errors

### ApprovalCallerNotOwnerNorApproved

```solidity
error ApprovalCallerNotOwnerNorApproved()
```

The caller must own the token or be an approved operator.




### ApprovalQueryForNonexistentToken

```solidity
error ApprovalQueryForNonexistentToken()
```

The token does not exist.




### BalanceQueryForZeroAddress

```solidity
error BalanceQueryForZeroAddress()
```

Cannot query the balance for the zero address.




### MintERC2309QuantityExceedsLimit

```solidity
error MintERC2309QuantityExceedsLimit()
```

The `quantity` minted with ERC2309 exceeds the safety limit.




### MintToZeroAddress

```solidity
error MintToZeroAddress()
```

Cannot mint to the zero address.




### MintZeroQuantity

```solidity
error MintZeroQuantity()
```

The quantity of tokens minted must be more than zero.




### OwnerQueryForNonexistentToken

```solidity
error OwnerQueryForNonexistentToken()
```

The token does not exist.




### OwnershipNotInitializedForExtraData

```solidity
error OwnershipNotInitializedForExtraData()
```

The `extraData` cannot be set on an unintialized ownership slot.




### TransferCallerNotOwnerNorApproved

```solidity
error TransferCallerNotOwnerNorApproved()
```

The caller must own the token or be an approved operator.




### TransferFromIncorrectOwner

```solidity
error TransferFromIncorrectOwner()
```

The token must be owned by `from`.




### TransferToNonERC721ReceiverImplementer

```solidity
error TransferToNonERC721ReceiverImplementer()
```

Cannot safely transfer to a contract that does not implement the ERC721Receiver interface.




### TransferToZeroAddress

```solidity
error TransferToZeroAddress()
```

Cannot transfer to the zero address.




### URIQueryForNonexistentToken

```solidity
error URIQueryForNonexistentToken()
```

The token does not exist.





