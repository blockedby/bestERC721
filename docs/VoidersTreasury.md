# VoidersTreasury









## Methods

### DEFAULT_ADMIN_ROLE

```solidity
function DEFAULT_ADMIN_ROLE() external view returns (bytes32)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### KEEPER_ROLE

```solidity
function KEEPER_ROLE() external view returns (bytes32)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### SIGNATURE_LENGTH

```solidity
function SIGNATURE_LENGTH() external view returns (uint8)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint8 | undefined |

### addKeeper

```solidity
function addKeeper(address _newOwner, bytes _concatSignatures) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _newOwner | address | undefined |
| _concatSignatures | bytes | undefined |

### bulkTransfer721

```solidity
function bulkTransfer721(address _token, address _to, uint256[] _tokenIds, bytes _concatSignatures) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _token | address | undefined |
| _to | address | undefined |
| _tokenIds | uint256[] | undefined |
| _concatSignatures | bytes | undefined |

### ecOffsetRecover

```solidity
function ecOffsetRecover(bytes32 hash, bytes signature, uint256 offset) external pure returns (address)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| hash | bytes32 | undefined |
| signature | bytes | undefined |
| offset | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getAddKeeperHash

```solidity
function getAddKeeperHash(uint256 _nextProposalIndex, address _owner) external pure returns (bytes32 signature)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _nextProposalIndex | uint256 | undefined |
| _owner | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| signature | bytes32 | undefined |

### getBulkTransfer721Hash

```solidity
function getBulkTransfer721Hash(uint256 _nextProposalIndex, address _token, address _to, uint256[] _tokenIds) external pure returns (bytes32 signature)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _nextProposalIndex | uint256 | undefined |
| _token | address | undefined |
| _to | address | undefined |
| _tokenIds | uint256[] | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| signature | bytes32 | undefined |

### getRemoveKeeperHash

```solidity
function getRemoveKeeperHash(uint256 _nextProposalIndex, address _owner) external pure returns (bytes32 signature)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _nextProposalIndex | uint256 | undefined |
| _owner | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| signature | bytes32 | undefined |

### getRoleAdmin

```solidity
function getRoleAdmin(bytes32 role) external view returns (bytes32)
```



*Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role&#39;s admin, use {_setRoleAdmin}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### getRoleMember

```solidity
function getRoleMember(bytes32 role, uint256 index) external view returns (address)
```



*Returns one of the accounts that have `role`. `index` must be a value between 0 and {getRoleMemberCount}, non-inclusive. Role bearers are not sorted in any particular way, and their ordering may change at any point. WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure you perform all queries on the same block. See the following https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296[forum post] for more information.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined |
| index | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getRoleMemberCount

```solidity
function getRoleMemberCount(bytes32 role) external view returns (uint256)
```



*Returns the number of accounts that have `role`. Can be used together with {getRoleMember} to enumerate all bearers of a role.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getSetMinQuorumHash

```solidity
function getSetMinQuorumHash(uint256 _nextProposalIndex, uint256 _quorum) external pure returns (bytes32 signature)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _nextProposalIndex | uint256 | undefined |
| _quorum | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| signature | bytes32 | undefined |

### getTransfer721Hash

```solidity
function getTransfer721Hash(uint256 _nextProposalIndex, address _token, address _to, uint256 _tokenId) external pure returns (bytes32 signature)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _nextProposalIndex | uint256 | undefined |
| _token | address | undefined |
| _to | address | undefined |
| _tokenId | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| signature | bytes32 | undefined |

### grantRole

```solidity
function grantRole(bytes32 role, address account) external nonpayable
```



*Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``&#39;s admin role. May emit a {RoleGranted} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined |
| account | address | undefined |

### hasRole

```solidity
function hasRole(bytes32 role, address account) external view returns (bool)
```



*Returns `true` if `account` has been granted `role`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined |
| account | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### minimumQuorum

```solidity
function minimumQuorum() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### nextProposalIndex

```solidity
function nextProposalIndex() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### onERC721Received

```solidity
function onERC721Received(address operator, address from, uint256 tokenId, bytes data) external nonpayable returns (bytes4)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| operator | address | undefined |
| from | address | undefined |
| tokenId | uint256 | undefined |
| data | bytes | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes4 | undefined |

### removeKeeper

```solidity
function removeKeeper(bytes _concatSignatures, address _oldOwner) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _concatSignatures | bytes | undefined |
| _oldOwner | address | undefined |

### renounceRole

```solidity
function renounceRole(bytes32 role, address account) external nonpayable
```



*Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function&#39;s purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`. May emit a {RoleRevoked} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined |
| account | address | undefined |

### revokeRole

```solidity
function revokeRole(bytes32 role, address account) external nonpayable
```



*Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``&#39;s admin role. May emit a {RoleRevoked} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined |
| account | address | undefined |

### setMinimumQuorum

```solidity
function setMinimumQuorum(bytes _concatSignatures, uint256 _quorum) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _concatSignatures | bytes | undefined |
| _quorum | uint256 | undefined |

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) external view returns (bool)
```



*See {IERC165-supportsInterface}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| interfaceId | bytes4 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### toEthSignedMessageHash

```solidity
function toEthSignedMessageHash(bytes32 hash) external pure returns (bytes32)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| hash | bytes32 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### transfer721

```solidity
function transfer721(address _token, address _to, uint256 _tokenId, bytes _concatSignatures) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _token | address | undefined |
| _to | address | undefined |
| _tokenId | uint256 | undefined |
| _concatSignatures | bytes | undefined |



## Events

### RoleAdminChanged

```solidity
event RoleAdminChanged(bytes32 indexed role, bytes32 indexed previousAdminRole, bytes32 indexed newAdminRole)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| role `indexed` | bytes32 | undefined |
| previousAdminRole `indexed` | bytes32 | undefined |
| newAdminRole `indexed` | bytes32 | undefined |

### RoleGranted

```solidity
event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| role `indexed` | bytes32 | undefined |
| account `indexed` | address | undefined |
| sender `indexed` | address | undefined |

### RoleRevoked

```solidity
event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| role `indexed` | bytes32 | undefined |
| account `indexed` | address | undefined |
| sender `indexed` | address | undefined |



